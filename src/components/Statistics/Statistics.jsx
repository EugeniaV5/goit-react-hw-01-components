import PropTypes from 'prop-types';
import { Section } from '../common/Section.styled';

import { Title, StatsList, StatsItem, StatsLabel } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <Section>
        {title && <Title>{title}</Title>}
        <StatsList>
          {stats.map(({ id, label, percentage }) => (
            <StatsItem key={id}>
              <StatsLabel>{label} </StatsLabel>
              <span>{percentage}%</span>
            </StatsItem>
          ))}
        </StatsList>
      </Section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
