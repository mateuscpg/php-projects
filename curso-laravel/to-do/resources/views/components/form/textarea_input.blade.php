<div class="inputArea">
    <label for="{{$name}}">
        {{$label ?? ''}}
    </label>
    <textarea
        name="{{$name}}"
        placeholder="{{$placeholder ?? ''}}"
        {{empty($required)? '' : 'required'}}></textarea>
</div>

