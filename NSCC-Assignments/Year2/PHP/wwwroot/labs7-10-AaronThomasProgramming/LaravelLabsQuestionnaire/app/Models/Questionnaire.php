<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//use Psy\Util\Str; //default given doesnt work
use Illuminate\Support\Str;

class Questionnaire extends Model
{
//    use HasFactory;
    protected $guarded = [];

    public function path(){

//        return '/questionnaires/' . $this->id;
        return url('/questionnaires/' . $this->id);
    }

    public function publicPath(){

        return url('/surveys/'.$this->id.'-'.Str::slug($this->title));
    }

    public function user(){

        return $this->belongsTo(User::class);
    }

    public function questions(){

        return $this->hasMany(Question::class);
    }

    public function surveys(){

        return $this->hasMany(Survey::class);
    }
}
