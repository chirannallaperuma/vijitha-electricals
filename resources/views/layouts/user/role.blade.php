<?php?>

@extends('admin_template')
@section('content')
    <div class="container">
        <div class="card small bg-light">
            <div class="card-header">
                <div class="card-title text-info text-uppercase small">Create Role
                    <a href="/user/role/role_list" target="_self">
                        <buttton type="button" class="btn btn-success btn-sm float-right">
                            <i class="fa fa-list">Role List</i>
                        </buttton>
                    </a>
                </div>
            </div>

            <div class="card-body">
                <form action="/user/role/save" method="post" class="form">
                    @csrf
                    <div class="row">
                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">Role Name</label>
                            <input type="text" class="form-control" id="role_name" name="role_name" required>
                        </div>

                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">Description</label>
                            <input type="text" class="form-control" id="description" name="description" required>
                        </div>
                    </div>
                    <div class="row float-right">
                        <input type="submit" value="save" class="btn btn-primary btn-sm">
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
