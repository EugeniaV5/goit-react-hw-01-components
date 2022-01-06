import PropTypes from 'prop-types';
import { Section } from '../common/Section.styled';
import { TableHeader, Table, TableTd, TableRow } from './Transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Table>
        <TableHeader>
          <TableRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
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
