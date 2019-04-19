@extends('admin_template')

@section('content')

<div class="container-fluid">
    <div class="card small bg-light text-dark">
            <div class="card-header">
                <div class="card-title text-info text-uppercase">User Create
                    <a href="/user/list" target="_self">
                        <button type="button" class="btn btn-success btn-sm float-right "><i class="fa fa-list"> User
                                List</i>
                        </button>
                    </a>
                </div>
            </div>

            @if(session('alert'))
                <div class="alert alert-success">
                    <button type="button"
                            class="close"
                            data-dismiss="alert"
                            aria-hidden="true">&times;
                    </button>
                    {{session('alert')}}
                </div>
            @endif

            <div class="card-body">
                <form action="" class="form" role="form" autocomplete="off" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">First Name</label>
                            <input type="text" class="form-control{{ $errors->has('first_name') ? ' is invalid' : '' }}"
                            value="{{ old('name') }}" name="first_name" id="first_name">
                        @if ($errors->has('first_name'))
                            <span class="invalid-feedback">
                                <span class="badge badge-danger">{{$errors->first('first_name')}}</span>
                            </span>
                        @endif
                        </div>

                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">Last Name</label>
                            <input type="text" class="form-control{{ $errors->has('last_name') ? ' is invalid' : '' }}"
                            value="{{ old('name') }}" name="last_name" id="last_name">
                        @if ($errors->has('last_name'))
                            <span class="invalid-feedback">
                                <span class="badge badge-danger">{{$errors->first('last_name')}}</span>
                            </span>
                        @endif
                        </div>

                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">Mobile</label>
                            <input type="text" class="form-control{{ $errors->has('mobile') ? ' is invalid' : '' }}"
                            value="{{ old('mobile') }}" id="mobile" name="mobile">
                        @if ($errors->has('mobile'))
                            <span class="invalid-feedback">
                                <span class="badge badge-danger">{{ $errors->first('mobile') }}</span>
                            </span>
                        @endif
                        </div>

                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">Email</label>
                            <input type="email" class="form-control{{ $errors->has('email') ? ' is invalid' : '' }}"
                            value="{{ old('email') }}" id="email" name="email">
                        @if ($errors->has('email'))
                            <span class="invalid-feedback">
                                <span class="badge badge-danger">{{ $errors->first('email') }}</span>
                            </span>
                        @endif
                        </div>
                        
                        
                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">Location</label>
                            <select name="location" id="location" class="form-control{{ $errors->has('location') ? ' is invalid' : '' }}"
                                    value="{{ old('location') }}">
                                    <option value="0">Select Location</option>
                                    <option value="1">Galle</option>
                                    <option value="2">Imaduwa</option>
                                    <option value="3">Akuressa</option>
                            </select>
                        @if ($errors->has('location'))
                            <span class="invalid-feedback">
                                <span class="badge badge-danger">{{ $errors->first('location') }}</span>
                            </span>
                        @endif
                        </div>

                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">Password</label>
                            <input type="password" name="password" class="form-control{{ $errors->has('password') ? ' is invalid' : '' }}">
                        @if ($errors->has('password'))
                            <span class="invalid-feedback">
                                <span class="badge badge-danger">{{ $errors->first('password') }}</span>
                            </span>
                        @endif
                        </div>

                        <div class="form-group col-lg-6">
                            <label class="col-form-label form-control-label">Confirm</label>
                            <input type="password" name="password_confirmation" class="form-control" id="password-confirm">
                        </div>

                        <div class="form-group col"></div>

                        <div class="form-group col-lg-4" style="padding-top: 20px">
                            <img id="product_image" class="img-thumbnail" width="200"
                                 src="{{ asset('images/no_image.jpg') }}"
                                 alt="product_image"/>
                            <p>Choose image</p>
                            <input type="file" name="image" id="itempic" onchange="imageUpload(this);"/>
                        </div>
                    </div>
                        <div class="row flow-right" style="padding-top: 50px">
                            <input type="submit" class="btn btn-primary" value="Create User">
                        </div>

                </form>
            </div>
    </div>
</div>

<script>
    $('div.alert').delay(2000).slideUp(300);

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
                        $('#product_image')
                            .attr('src', e.target.result);
                    }
                }

            };

            reader.readAsDataURL(input.files[0]);
        }
    }
</script>

@endsection
