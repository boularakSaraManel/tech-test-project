<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileController extends Controller
{
    public function index()
    {
        $files = auth()->user()->files;
        return response()->json($files);
    }

    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|file|max:25600|mimes:png,jpeg,svg,pdf,docx,mp4', // Example validation
            'folder_id' => 'nullable|exists:folders,id',
        ]);

        $path = $request->file('file')->store('uploads', 'public');
        $file = File::create([
            'name' => $request->file('file')->getClientOriginalName(),
            'path' => $path,
            'type' => $request->file('file')->getMimeType(),
            'size' => $request->file('file')->getSize(),
            'user_id' => auth()->id(),
            'folder_id' => $request->folder_id,
        ]);

        return response()->json($file, 201);
    }

    public function destroy(File $file)
    {
        if ($file->user_id != auth()->id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        Storage::disk('public')->delete($file->path);
        $file->delete();

        return response()->json(['message' => 'File deleted']);
    }
}
