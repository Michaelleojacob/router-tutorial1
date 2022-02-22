import { useParams } from 'react-router-dom';
import { getInvoice } from '../data';

const Invoice = () => {
  //params literally uses the  URL parameters. (as I understand it)
  //click item.id -> URL bar === /item.id example: /item4102
  //use params allows us to use the 'item4102' part of the URL
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div style={{ padding: '1rem' }}>
      <div>total due: {invoice.amount}</div>
      <div>name: {invoice.name}</div>
      <div>number: {invoice.number}</div>
      <div>due: {invoice.due}</div>
    </div>
  );
};

export default Invoice;
