import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { distinctUntilChanged, switchMap, pluck, debounceTime } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { PaginationModel } from './../../../models/common';
import { AccountService } from './../../../services/account.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  uersList: any[] = [];
  public paginationModel: PaginationModel = new PaginationModel();

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getUsers(this.paginationModel.currentPage, this.paginationModel.pageSize);
   this.searchFilter();
  }

  getUsers(page, pageSize, searchQry = "") {
    searchQry = searchQry || this.paginationModel.search;

    let req$ = this.accountService.getUsers(page, pageSize, searchQry);
    req$.subscribe(
      (resp: any) => {
        this.uersList = resp.data.results;
        this.paginationModel.totalRecords = resp.data.totalRecords;

        this.initPaginationModel(resp.data);
      },
      (err: HttpErrorResponse) => this.accountService.handleError(err)
    );
  }

  deleteUser(user: any) {
    let isConfirm = confirm(
      `Delete user ${user.firstName} ${user.lastName} ?.`
    );
    let id = user.id;
    if (isConfirm && id) {
      let req$ = this.accountService.deleteUser(id);

      req$.subscribe(
        (resp: any) => {
          this.getUsers(this.paginationModel.currentPage, this.paginationModel.pageSize);
          // this.toastr.success(
          //   `${user.firstName} ${user.lastName} deleted successfully.`
          // );
        },
        (err: HttpErrorResponse) => {
          this.accountService.handleError(err);
        }
      );
    }
  }

  // search by user name
  searchFilter() {
    let searchEle = document.querySelector("#searchFilter");
    let source = fromEvent(searchEle, "keyup");
    source = source.pipe(
      debounceTime(400),
      pluck("target", "value"),
      distinctUntilChanged(),
      // filter((text: string) => text.trim().length > 2),
      switchMap((searchTerm: string) => {
        this.paginationModel.search = searchTerm;

        return this.accountService.getUsers(
          this.paginationModel.currentPage,
          this.paginationModel.pageSize,
          searchTerm
        );
      })
    );

    source.subscribe(
      (resp: any) => {
        this.uersList = resp.data.results;
        this.paginationModel.totalRecords = resp.data.totalRecords;
      },
      (err: HttpErrorResponse) => this.accountService.handleError(err)
    );
  }

  viewUserDetail(id: any) {
    console.log(id);
  }
  onPageChange(event) {
      this.paginationModel.currentPage = parseInt(event);
    this.getUsers(this.paginationModel.currentPage, this.paginationModel.pageSize);
  }

  initPaginationModel(respData: any) {
    delete respData["results"];
    this.paginationModel = respData;
  }
}
