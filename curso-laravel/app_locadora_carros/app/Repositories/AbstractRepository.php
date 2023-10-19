<?php
 namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;

abstract class AbstractRepository {

    public function __construct(Model $model){
        $this->model = $model;
    }

    public function selectAtributosRegistrosRelacionados($atributos){
        $this->model = $this->model->with($atributos);
        //A query foi montada
    }

    public function filtro($filtros){
        $filtros = explode(';', $filtros);

        foreach($filtros as $key => $condicao){
            $c  = explode(':',$condicao);
            $this->model = $this->model->where( $c[0], $c[1], $c[2] );
        }
    }
    public function selectAtributos($atributos){

        $this->model = $this->model->selectRaw($atributos);
        //Esse tipo de select(selectRaw) consegue lidar com tipos de consulta como "id, nome, imagem" ao invés de 'id', 'nome', 'imagem';
    }

    public function getResultado(){
        return $this->model->get();
        //all() : Cria um objeto de consulta + get() = Collection
        //get() : Collection, e pode modificar a consulta.
    }
    public function getResultadoPaginado($paginas){
        return $this->model->orderBy('created_at', 'desc')->paginate($paginas);
    }

}


?>