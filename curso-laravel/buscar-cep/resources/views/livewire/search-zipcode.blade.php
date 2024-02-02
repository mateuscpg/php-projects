<div>
    
    <form class="p-8 bg-gray-200 flex-col w-1/2 mx-auto ">
        <h1 class="mb-4">Buscador de CEP</h1>
        <div class="inputs">
            <label for="cep">CEP</label>
            <input class="border py-1" id="cep" type="text" wire:model.lazy="cep">
        </div>
        @if ($cep)
            
            <div class="inputs" >
                <label for="street">Rua</label>
                <input class="border py-1" id="street" type="text" wire:model.lazy="street">
            </div>
            <div class="inputs">
                <label for="neighborhood">Bairro</label>
                <input class="border py-1"  id="neighborhood" type="text" wire:model="neighborhood">
            </div>
            <div class="inputs">
                <label for="city">Cidade</label>
                <input class="border py-1"  id="city" type="text" wire:model.lazy="city">
            </div>
            <div class="inputs">
                <label for="state">Estado</label>
                <input class="border py-1"  id="state" type="text" wire:model.lazy="state">
            </div>
        @endif
        <div>
            <button class="px-4 py-2 mt-5 bg-green-500 hover:bg-green-400 text-white rounded-md" wire:model.lazy="cep" stype="button" wire:click="search">Buscar</button>
        </div>
    </form>

</div>

<style>
    .inputs{
        display:flex;
        flex-direction: column;
    }
</style>
