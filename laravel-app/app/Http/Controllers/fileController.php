<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Gate;
use App\Models\File;
use Illuminate\Http\Request;

class fileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

public function uploadFile(Request $request)
{
    if (Gate::allows('upload-file')) {
        // Authorized to upload file
        // Your upload logic here
    } else {
        // Not authorized
        abort(403, 'Unauthorized action.');
    }
}

    /**
     * Display the specified resource.
     */
    public function show(File $file)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(File $file)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, File $file)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(File $file)
    {
        //
    }
}
