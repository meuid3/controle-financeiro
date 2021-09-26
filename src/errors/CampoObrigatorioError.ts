export const ErrorCampoObrigatorioNaoInformado = (parametro: string) => {
  throw new Error(`Parâmetro '${parametro}' não informado.`)
}