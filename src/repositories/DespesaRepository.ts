import { PrismaClient } from '.prisma/client'
import { Despesa } from '../entities/Despesa'
import { IDespesaRepository } from './adapters/IDespesaRepository'

export class DespesaRepository  implements IDespesaRepository {

  private prisma = new PrismaClient()

  public async cadastrar(despesa: Despesa): Promise<Despesa> {
    const despesaCadastrada = await this.prisma.despesa.create({
      data: despesa
    })

    return despesaCadastrada
  }
  
  public async listarDespesa(): Promise<Despesa> {
    throw new Error('Method not implemented.');
  }

  public async listarDespesas(): Promise<Despesa[]> {
    return await this.prisma.despesa.findMany()
  }

  public async excluirDespesa(): Promise<void> {
    throw new Error('Method not implemented.');
  }

}