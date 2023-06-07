<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Controle de Tarefas')
{{ $slot }}
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
