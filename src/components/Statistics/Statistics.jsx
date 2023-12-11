import { StatisticsItem } from './StatisticsItem';

const Statistics = ({ title = '', stats }) => {
  return (
    <section className="statistics">
      {title.length > 0 && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(item => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export { Statistics };
