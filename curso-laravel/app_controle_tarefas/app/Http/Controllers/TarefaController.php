<?php

namespace App\Http\Controllers;

use App\Exports\TarefasExport;
use App\Mail\NovaTarefaMail;
use App\Models\Tarefa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;
use PhpParser\Node\Stmt\Return_;

class TarefaController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){

        $user_id= Auth::user()->id;
        $tarefas= Tarefa::where('user_id', $user_id)->paginate(5);


        return view('tarefa.index', ['tarefas' => $tarefas]);   

        // if(auth()->check()){
        //     $id = auth()->user()->id;
        //     $name = auth()->user()->name;
        //     $email = auth()->user()->email;
        //     echo "Chegamos até aqui<br>Usuário de id: $id<br>Nome: $name<br>Email: $email";   
        // }
        // else{
        //     return view('auth.login');
        // }

        // OUUU

        // if(Auth::check()){
        //     $id = Auth::user()->id;
        //     $name = Auth::user()->name;
        //     $email = Auth::user()->email;
        //     echo "Chegamos até aqui<br>Usuário de id: $id<br>Nome: $name<br>Email: $email";   
        // }
        // else{
        //     return view('auth.login');
        // }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('tarefa.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $regras=[
            'tarefa' => 'required|max:200',
            'data_limite_conclusao' => 'required'
        ];
        $feedback=[
            'tarefa.required' => "O campo ':attribute' precisa ser informado.",
            'tarefa.max' => "O campo ':attribute' só pode ter no máximo 200 caracteres.",
            'data_limite_conclusao.required' => "O campo ':attribute' precisa ser informado."
        ];
        $request->validate($regras, $feedback);

        $dados= $request->all('tarefa', 'data_limite_conclusao');
        $dados['user_id'] = Auth::user()->id;

        $tarefa =Tarefa::create($dados);
        $destinatario = Auth::user()->email;

        Mail::to($destinatario)->send(new NovaTarefaMail($tarefa));
        
        return redirect()->route('tarefa.index',['tarefa' => $tarefa->id]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Tarefa  $tarefa
     * @return \Illuminate\Http\Response
     */
    public function show(Tarefa $tarefa)
    {
        return view('tarefa.show', ['tarefa' => $tarefa]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Tarefa  $tarefa
     * @return \Illuminate\Http\Response
     */
    public function edit(Tarefa $tarefa)
    {
        $user_id = Auth::user()->id;
        if($tarefa->user_id == $user_id){
            return view('tarefa.edit', ['tarefa' => $tarefa]);
        }
        else{
            return view('acesso-negado');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Tarefa  $tarefa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tarefa $tarefa)
    {
        $regras=[
            'tarefa' => 'required|max:200',
            'data_limite_conclusao' => 'required'
        ];
        $feedback=[
            'tarefa.required' => "O campo ':attribute' precisa ser informado.",
            'tarefa.max' => "O campo ':attribute' só pode ter no máximo 200 caracteres.",
            'data_limite_conclusao.required' => "O campo ':attribute' precisa ser informado."
        ];
        $request->validate($regras, $feedback);
        $dados = $request->all('tarefa', 'data_limite_conclusao');

        if(!$tarefa->user_id == Auth::user()->id){
            return view('acesso-negado');
        }
            $tarefa->update($dados);
            return redirect()->route('tarefa.index', ['tarefa' => $tarefa->id]);
        }
        
        /**
         * Remove the specified resource from storage.
         *
         * @param  \App\Models\Tarefa  $tarefa
         * @return \Illuminate\Http\Response
         */
        public function destroy(Tarefa $tarefa)
        {
            if($tarefa->user_id != Auth::user()->id){
                return view('acesso-negado');
            }
            $tarefa->delete();
            return redirect()->route('tarefa.index', ['tarefa' => $tarefa->id]);
            
        }
        
        public function exportacao($extensao){
            if(in_array($extensao, ['xlsx', 'csv', 'pdf'])){
                // if($extensao == 'pdf'){
                //     return Excel::download(new TarefasExport, "lista_de_tarefas.", \Maatwebsite\Excel\Excel::DOMPDF);
                // }
                return Excel::download(new TarefasExport, "lista_de_tarefas.$extensao");
            }
            return redirect()->route('tarefa.index');
    }
    
    public function exportar_pdf(){
        return 'Vou fazer isso aqui ainda';
    }
}
