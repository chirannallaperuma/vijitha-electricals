<?php

namespace App;

use Faker\Provider\File;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Product extends Model
{

    public static function saveProduct($data, $file)
    {
        $user = Auth::user()->id;
        $cost = $data['cost_price'];
        $selling = $data['selling_price'];

        
            $product = new Product();
            $product->barcode = $data['barcode'];
            $product->description = $data['description'];
            $product->category = $data['category'];
            $product->brand = $data['brand'];
            $product->supplier = $data['supplier'];
            $product->cost_price = $cost;
            $product->cost_without_tax = $cost;
            $product->selling_price = $selling;
            $product->selling_without_tax = $selling;
            $product->user_created = $user;
            $product->status = 1;
            $product->save();

            $id = $product->id;
            $product->sku = $id;
            $product->update();

            if ($file != null) {
                $p = $product->barcode;


                $file_extension = $file->getClientOriginalExtension();
                $file_name = $p . '.' . $file_extension;

                DB::table('products')->where('id', $id)->update(['img_url' => $file_name]);

                $destinationPath = 'uploads/products';
                $file->move($destinationPath, $file_name);
            }
        

    }

    public static function updateProduct($data, $file)
    {
        $barcode = $data['barcode'];
        $description = $data['description'];
        $category = $data['category'];
        $brand = $data['brand'];
        $supplier = $data['supplier'];
        $cost_price = $data['cost_price'];
        $selling_price = $data['selling_price'];
//        $status_tax = $data['tax'];
        $id = $data['id'];

        DB::table('products')
            ->where('id', $id)
            ->update(['description' => $description, 'barcode' => $barcode, 'category' => $category, 'brand' => $brand,
                'supplier' => $supplier, 'cost_price' => $cost_price, 'selling_price' => $selling_price]);

        if ($file != null) {

            $file_extension = $file->getClientOriginalExtension();
            $file_name = $barcode . '.' . $file_extension;

            DB::table('products')->where('id', $id)->update(['img_url' => $file_name]);

            $destinationPath = 'uploads/products';
            $file->move($destinationPath, $file_name);
        }
    }

    public static function getProductsForPo($search)
    {
        DB::table('products')->where('description', $search);
    }

}
