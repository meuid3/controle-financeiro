import { PrismaClient } from ".prisma/client";
import { TipoPagamento } from "../entities/TipoPagamento";
import { ITipoPagamentoRepository } from "./adapters/ITipoPagamentoRepository";

export class TipoPagamentoRepository implements ITipoPagamentoRepository {

  private prisma = new PrismaClient()
  
  async cadastrar(tipoPagamento: TipoPagamento): Promise<TipoPagamento> {
    const persist = await this.prisma.tipoPagamento.create({
      data: tipoPagamento
    })

    return persist
  }

  async listarTiposPagamento(): Promise<TipoPagamento[]> {
    return await this.prisma.tipoPagamento.findMany()
  }

  ativarTipoPagamento(): Promise<TipoPagamento> {
    throw new Error("Method not implemented.");
  }
  
  inativarTipoPagamento(): Promise<TipoPagamento> {
    throw new Error("Method not implemented.");
  }
  
}