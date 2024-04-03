export interface TransactionType {
  id: number
  title: string
  date: string
  transaction_id: string
  type: 'send' | 'receive'
  amount: number
  transaction_type: string
  card_number: string
}
