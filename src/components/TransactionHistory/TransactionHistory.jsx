import PropTypes from 'prop-types';
import { Section } from '../common/Section.styled';
import {
  TableHeader,
  Table,
  TableTh,
  TableTd,
  TableRow,
} from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Table>
        <TableHeader>
          <TableRow>
            <TableTh>Type</TableTh>
            <TableTh>Amount</TableTh>
            <TableTh>Currency</TableTh>
          </TableRow>
        </TableHeader>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableTd>{type}</TableTd>
              <TableTd>{amount}</TableTd>
              <TableTd>{currency}</TableTd>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
