<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Questionnaire;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    //
    public function create(Questionnaire $questionnaire){

        return view('question.create', compact('questionnaire'));
    }

    public function store(Questionnaire $questionnaire){

//        dd(request()->all());

        $data = request()->validate([
            'question.question' => 'required',
            'answers.*.answer' => 'required',
        ]);

//        dd($data);

        $question = $questionnaire->questions()->create($data['question']);
        $question->answers()->createMany($data['answers']);

        return redirect('/questionnaires/'.$questionnaire->id);
    }

    public function destroy(Questionnaire $questionnaire, Question $question){

//        dd($question->answers);
        $question->answers()->delete();
        $question->delete();

        return redirect($questionnaire->path());
    }
}
