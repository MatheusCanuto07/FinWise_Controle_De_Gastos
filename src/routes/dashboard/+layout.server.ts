import type { LayoutServerLoad } from './$types';

export const load = (async ({url}) => {
  // switch (url.pathname) {
  //   case "/dashboard/entradas":
  //     total = totalEntradas;
  //     console.log(total)
  //     break;
  //   case "/dashboard/saidas":
  //     total = totalSaidas
  //     console.log(total)
  //     break;

  //   case "/dashboard/devedores":
  //     total = await q.queries().carregarTotalTransacoesTipoMes('devedor', 1)
  //     console.log(total)
  //     break;

  //   case "/dashboard/dividas":
  //     total = await q.queries().carregarTotalTransacoesTipoMes('divida', 1)
  //     console.log(total)
  //     break;

  // }


  // let saldo = await q.queries().carregarSaldoUsuario(1);
  
  return {

  };
}) satisfies LayoutServerLoad;