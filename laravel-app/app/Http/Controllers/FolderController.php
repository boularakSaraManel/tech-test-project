<?php

// app/Http/Controllers/FolderController.php
namespace App\Http\Controllers;

use App\Models\Folder;
use Illuminate\Http\Request;

class FolderController extends Controller
{
    public function index()
    {
        $folders = auth()->user()->folders;
        return response()->json($folders);
    }

    public function store(Request $request)
    {
        $request->validate(['name' => 'required|string|max:255']);

        $folder = Folder::create([
            'name' => $request->name,
            'user_id' => auth()->id(),
        ]);

        return response()->json($folder, 201);
    }

    public function destroy(Folder $folder)
    {
        if ($folder->user_id != auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $folder->delete();
        return response()->json(['message' => 'Folder deleted']);
    }
}
