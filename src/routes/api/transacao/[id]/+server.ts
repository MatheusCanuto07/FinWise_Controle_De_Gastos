import { json } from '@sveltejs/kit';
import {deleteTransaction} from "$lib/db/DAO/Transacao";
export async function DELETE({params, cookies}) {
    console.log('DELETE');
    try {
        let idDeleted = await deleteTransaction(1, parseInt(params.id) ?? 0);
        return json(idDeleted);
    } catch (error) {
        console.error('Erro ao deletar transação:', error);
        return json({ error: 'Erro ao deletar transação' });
    }
}
