<?php?>

@extends('admin_template')
@section('content')
    <div class="container-fluid">
        <div class="card small">
            <div class="card-header">
                <div class="card-title text-uppercase"></div>
            </div>

            <div class="card-body">
                <form action="/user/role/search" method="post">
                    <div class="form-group row">
                        {{csrf_field()}}
                        <div class="col-lg-6">
                            <input type="text" class="form-control" name="search" placeholder="SEARCH">
                        </div>
                        <div class="col-lg-3">
                            <button type="submit" class="btn btn-primary btn-sm float-left">
                                <i class="fa fa-search">Search</i>
                            </button>
                        </div>
                    </div>
                </form>
                @if (session('alert'))
                    <div class="alert alert-success">
                        <button type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-hidden="true">&times;
                        </button>
                        {{session('alert')}}
                    </div>
                @endif
                <div class="form-group">
                    @if (isset($users))
                        <table class="table table-bordered table-responsive-lg">
                            <tr>
                                <th class="text-center" rowspan="2">ID</th>
                                <th class="text-center" rowspan="2">Name</th>
                                <th class="text-center" rowspan="2">User Name</th>
                                <th class="text-center" colspan="3">Roles</th>
                                <th class="text-center" rowspan="2">Assign</th>
                            </tr>
                            <tr>
                                <th class="text-center">admin</th>
                                <th class="text-center">stock controller</th>
                                <th class="text-center">cashier</th>
                            </tr>

                            @foreach($users as $key=>$user)
                                <tr>
                                    <form action="/user/role/assign" method="post">
                                        @csrf
                                        <td>{{$user->id}}</td>
                                        <td>{{$user->first_name .' '. $user->last_name}}</td>
                                        <td>{{$user->email}}<input type="hidden" value="{{$user->email}}" name="email"></td>
                                        <td>
                                            <input type="checkbox" name="role_admin"
                                            id=""{{$user->hasRole('admin') ? 'checked':''}}>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="role_stock manager"
                                            id="" {{$user->hasRole('stock manager') ? 'checked': ''}}>
                                        </td>
                                        <td>
                                            <input type="checkbox" name="role_cashier"
                                            id="" {{$user->hasRole('cashier') ? 'checked': ''}}>
                                        </td>
                                        <td>
                                            <button type="submit" class="btn btn-primary btn-sm">Assign</button>
                                        </td>
                                    </form>
                                </tr>
                            @endforeach
                        </table>
                        {!! $users->render() !!}
                    @else
                        <div class="alert alert-warning col-lg-12 text-center" role="alert">
                            <span>{{$message}}</span>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
    <script>
        $('div.alert').delay(2000).slideUp(300);
    </script>
@endsection
