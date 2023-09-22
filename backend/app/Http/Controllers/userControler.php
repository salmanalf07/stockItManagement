<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\Facades\DataTables;

class userControler extends Controller
{
    public function json()
    {
        $data = User::get();

        return DataTables::of($data)
            ->addColumn('aksi', function ($data) {
                return
                    '<div class="row col-12 justify-content-center"><div class="col-4"><button id="edit" data-id="' . $data->id . '" class="btn btn-block btn-warning" data-placement="top" title="Edit">
                    <i class="fas fa-pen"></i></i></button></div> <div class="col-4">
                <button id="delete" data-id="' . $data->id . '" class="btn btn-block btn-danger" data-bs-toggle="tooltip" data-placement="top" title="Delete">
                <i class="fas fa-trash"></i></button></div></div>';
            })
            ->rawColumns(['aksi'])
            ->toJson();
    }
}
