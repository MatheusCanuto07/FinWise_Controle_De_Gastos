import { db } from "./db";
import { relations, eq, and, like, desc, count, gte, lte, asc, sql } from 'drizzle-orm';
import {
  transactionTable,
  cartaoTable,
  categoriaTable,
  usuarioTable,
  lembretesTable
} from './schema/tables'; 

import type {
  TransactionSelect,
  TransactionInsert,
  CartaoSelect,
  CartaoInsert,
  CategoriaSelect,
  CategoriaInsert,
  UsuarioSelect,
  UsuarioInsert,
  LembreteInsert,
  LembreteSelect
} from './schema/tables';

import * as constant from '../utils/index';
import * as functions from '../utils/functions'; 

async function insertTransaction (transaction : TransactionInsert) : Promise<{ id: number }> {
  try {
    if(transaction.recorrencia == constant.active)
    {
      let result;
      let tData = functions.timestampParaData(transaction.data);
      if(transaction.tipoRecorrencia == constant.tiposRecorrencia.diaria){
        for (let index = 0; index < parseInt(transaction.tempoRecorrencia ?? ""); index++) {
          transaction.data = functions.dataParaTimestamp(tData);
          [result] = await db.insert(transactionTable)
            .values({
              ...transaction,
              idOcorrencia: sql`(SELECT last_insert_rowid())`
            })
            .returning({ id: transactionTable.id });
          tData.setDate(tData.getDate() + 1);
        }
        return {id : result?.id ?? 1}
      }
      
      else if(transaction.tipoRecorrencia == constant.tiposRecorrencia.mensal){
        for (let index = 0; index < parseInt(transaction.tempoRecorrencia ?? ""); index++) {
          transaction.data = functions.dataParaTimestamp(tData);
          [result] = await db.insert(transactionTable)
            .values({
              ...transaction,
              idOcorrencia: sql`(SELECT last_insert_rowid())`
            })
            .returning({ id: transactionTable.id });
          tData.setDate(tData.getDate() + 31);
        }
        return {id : result?.id ?? 1}
      } 
      
      else if(transaction.tipoRecorrencia == constant.tiposRecorrencia.anual){
        for (let index = 0; index < parseInt(transaction.tempoRecorrencia ?? ""); index++) {
          transaction.data = functions.dataParaTimestamp(tData);
          [result] = await db.insert(transactionTable)
            .values({
              ...transaction,
              idOcorrencia: sql`(SELECT last_insert_rowid())`
            })
            .returning({ id: transactionTable.id });
          tData.setDate(tData.getDate() + 365);
        }
        return {id : result?.id ?? 1}
      }
    }
    
    const [result] = await db.insert(transactionTable).values(transaction).returning({ id: transactionTable.id });

    return {id: result.id};
  } catch (error) {
    console.error('Erro ao inserir insumo:', error);
  }
  return { id: 0 };
}

async function selectTransactions(startDate: Date, endDate: Date) {
  try {
    const startTimestamp = startDate.getTime();
    const endTimestamp = endDate.getTime();

    if (isNaN(startTimestamp) || isNaN(endTimestamp)) {
      throw new Error('Datas inválidas fornecidas');
    }

    const result = await db
      .select()
      .from(transactionTable)
      .where(
        and(
          gte(transactionTable.data, startTimestamp),
          lte(transactionTable.data, endTimestamp)
        )
      )
      .orderBy(asc(transactionTable.id))
      .execute();
    
    return result;
  } catch (error) {
    console.error('Erro na consulta:', error);
    throw new Error('Falha ao buscar transações');
  }
}

async function deleteTransaction(id: number) {
  try {
    const deleted = await db
      .delete(transactionTable)
      .where(
        and(
          eq(transactionTable.id, id),
          eq(transactionTable.idOcorrencia, id)
        )
      )
      .returning({ deletedId: transactionTable.id });

    if (deleted.length === 0) {
      console.warn(`Nenhuma transação encontrada com id e idOcorrencia: ${id}`);
      return false;
    }

    return true; 
  } catch (error) {
    console.error('Erro ao deletar transação:', error);
    throw error;
  }
}

async function createCategory(categoria : CategoriaInsert) {
  try {
    const [result] = await db.insert(categoriaTable).values(categoria).returning({ id: categoriaTable.id });
    return {id: result.id};
  } catch (error) {
    console.error('Erro ao inserir insumo:', error);
  }
  return { id: 0 };
}

async function deleteCategory(id : number){
  try{
    const [result] = await db
      .delete(categoriaTable)
      .where(eq(categoriaTable.id, id))
      .returning({ deletedId: categoriaTable.id });

    if (result.deletedId === 0) {
      console.warn(`Nenhuma categoria encontrada com id: ${id}`);
      return false;
    }

    return true;
  } catch(error){
    console.error('Erro ao deletar categoria:', error);
    throw error;
  }
}

async function createCartao(cartao : CartaoInsert) {
  try {
    const [result] = await db.insert(cartaoTable).values(cartao).returning({ id: cartaoTable.id });
    return {id: result.id};
  } catch (error) {
    console.error('Erro ao inserir insumo:', error);
  }
  return { id: 0 };
}

async function getCartoes(idUser : number){
  try{
    const result = await db
      .select()
      .from(cartaoTable)
      .where(eq(cartaoTable.idUser, idUser))
      .execute();
    return result;
  } catch(error){
    console.error('Erro ao buscar cartões:', error);
    throw error;
  }
}

async function getCategorias(idUser : number){
  try{
    const result = await db
      .select()
      .from(categoriaTable)
      .where(eq(categoriaTable.idUser, idUser))
      .execute();
    return result;
  } catch(error){
    console.error('Erro ao buscar categorias:', error);
    throw error;
  }
}

async function createLembrete(lembrete : LembreteInsert){
  try{
    const [result] = await db
      .insert(lembretesTable)
      .values(lembrete).
      returning({ id: lembretesTable.id });
    return {id: result.id};
  } catch(error){
    console.error('Erro ao inserir insumo:', error);
  }
}

async function getLembretes(idUser : number){
  try{
    const result = await db
      .select()
      .from(lembretesTable)
      .where(eq(lembretesTable.idUser, idUser))
      .execute();
    return result;
  } catch(error){
    console.error('Erro ao buscar lembretes:', error);
    throw error;
  }
}

async function getLastThreeLembretes(idUser : number){
  try{
    const result = await db
      .select()
      .from(lembretesTable)
      .where(eq(lembretesTable.idUser, idUser))
      .limit(3)
      .execute();
    return result;
  } catch(error){
    console.error('Erro ao buscar lembretes:', error);
    throw error;
  }
}

export {
  insertTransaction,
  selectTransactions,
  deleteTransaction,
  createCategory,
  deleteCategory,
  createCartao,
  getCategorias,
  getCartoes,
  createLembrete,
  getLembretes,
  getLastThreeLembretes
} 