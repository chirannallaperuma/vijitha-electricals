<?php
    ?>
@extends('admin_template')
@section('content')
    <div class="container">
        <div class="card">
            <div class="card-header small">
                <div class="card-title">User Profile</div>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="form-group col-lg-4" style="padding-top: 20px">
                        @if (Auth::user()->img_url !=null)
                            <img src="../uploads/users/{{Auth::user()->img_url}}" alt="User Image"
                                 class="user-image" id="user_image" width="200">
                        @else
                            <img src="{{asset('images/user.png')}}" alt="User Image" class="user-image" id="user_image"
                                 width="200">
                        @endif
                        <p>Choose Image</p>
                        <input type="file" name="image" id="itempic" onchange="imageUpload(this);"/>
                    </div>
                    <div class="col-lg-8">
                        <div class="form-group">
                            <label for="">First Name</label>
                            <input type="text" class="form-control" name="first_name" id="first_name"
                                   value="{{Auth::user()->first_name}}">
                        </div>

                        <div class="form-group">
                            <label for="">Last Name</label>
                            <input type="text" class="form-control" name="last_name" id="last_name"
                                   value="{{Auth::user()->last_name}}">
                        </div>

                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="text" class="form-control" disabled name="email" id="email"
                                   value="{{Auth::user()->email}}">
                        </div>

                        <div class="form-group">
                            <label for="">Password</label>
                            <input type="password" class="form-control" id="password" name="password">
                        </div>

                        <div class="form-group">
                            <label for="">Confirm Password</label>
                            <input type="password" class="form-control" id="password" name="password">
                        </div>
                    </div>
                </div>
                <div class="row float-right">
                    <button type="submit" class="btn btn-primary btn-sm">Update</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    <script>

        function imageUpload(input) {

            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    var img = new Image();
                    img.src = e.target.result;

                    var w;
                    var h;
                    var s;

                    img.onload = function (ev) {

                        w = this.width;
                        h = this.height;
                        s = input.files[0].size;

                        if (s >= 100000 || h > w) {
                            setTimeout(function () {
                                sweetAlert("Oops...", "Attachment should smaller than 100 kb and same width, height!", "error");
                            }, 500);

                            this.value = "";
                            $('#itempic').val('')
                        } else {
                            $('#user_image')
                                .attr('src', e.target.result);
                        }
                    }
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>
@endsection
