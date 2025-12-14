import snowflakeLogo from '@/assets/Snowflake_Logo.svg';
import bigqueryLogo from '@/assets/google_bigquery-ar21~bgwhite.svg';
import postgresLogo from '@/assets/Postgresql_elephant.svg';
import mysqlLogo from '@/assets/mysql-ar21~bgwhite.svg';
import redshiftLogo from '@/assets/Amazon-Redshift-Logo.svg';
import mongodbLogo from '@/assets/mongodb-ar21~bgwhite.svg';
import sqlServerLogo from '@/assets/microsoft-sql-server-1.svg';
import oracleLogo from '@/assets/oracle-6.svg';
import athenaLogo from '@/assets/aws-athena.svg';
import clickhouseLogo from '@/assets/clickhouse-yellow-badge.svg';
import mariadbLogo from '@/assets/mariadb-filled-.svg';
import sqliteLogo from '@/assets/sqlite.svg';
import { COLORS, SPACING, TYPOGRAPHY } from '@/constants/theme';
import { CONNECTORS } from '@/constants/strings';
import type { Connector } from '@/types';

const connectors: (Connector & { supported: boolean })[] = [
  {
    name: 'Snowflake',
    logo: <img src={snowflakeLogo} alt="Snowflake" className="w-full h-full object-contain" />,
    color: COLORS.connectors.snowflake,
    supported: true,
  },
  {
    name: 'Google BigQuery',
    logo: <img src={bigqueryLogo} alt="Google BigQuery" className="w-full h-full object-contain" />,
    color: COLORS.connectors.bigquery,
    supported: true,
  },
  {
    name: 'PostgreSQL',
    logo: <img src={postgresLogo} alt="PostgreSQL" className="w-full h-full object-contain" />,
    color: '',
    supported: true,
  },
  {
    name: 'MySQL',
    logo: <img src={mysqlLogo} alt="MySQL" className="w-full h-full object-contain" />,
    color: COLORS.connectors.sqlServer,
    supported: true,
  },
  {
    name: 'Amazon Redshift',
    logo: <img src={redshiftLogo} alt="Amazon Redshift" className="w-full h-full object-contain" />,
    color: COLORS.connectors.redshift,
    supported: true,
  },
  {
    name: 'MongoDB',
    logo: <img src={mongodbLogo} alt="MongoDB" className="w-full h-full object-contain" />,
    color: COLORS.connectors.mongodb,
    supported: false,
  },
  {
    name: 'Microsoft SQL Server',
    logo: <img src={sqlServerLogo} alt="Microsoft SQL Server" className="w-full h-full object-contain" />,
    color: COLORS.connectors.sqlServer,
    supported: false,
  },
  {
    name: 'Oracle',
    logo: <img src={oracleLogo} alt="Oracle" className="w-full h-full object-contain" />,
    color: COLORS.connectors.oracle,
    supported: false,
  },
  {
    name: 'AWS Athena',
    logo: <img src={athenaLogo} alt="AWS Athena" className="w-full h-full object-contain" />,
    color: COLORS.connectors.athena,
    supported: false,
  },
  {
    name: 'ClickHouse',
    logo: <img src={clickhouseLogo} alt="ClickHouse" className="w-full h-full object-contain" />,
    color: COLORS.connectors.clickhouse,
    supported: true,
  },
  {
    name: 'MariaDB',
    logo: <img src={mariadbLogo} alt="MariaDB" className="w-full h-full object-contain" />,
    color: COLORS.connectors.mariaDB,
    supported: false,
  },
  {
    name: 'SQLite',
    logo: <img src={sqliteLogo} alt="SQLite" className="w-full h-full object-contain" />,
    color: COLORS.connectors.sqlite,
    supported: false,
  },
];

export function Connectors() {
  return (
    <section className={`${SPACING.section.vertical} ${SPACING.section.horizontal} bg-[#fafafa] border-t border-gray-100`}>
      <div className={`${SPACING.container.maxWidth} ${SPACING.container.center}`}>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className={`${TYPOGRAPHY.heading.h2} mb-6 text-gray-900 leading-tight`}>
            {CONNECTORS.title}
          </h2>
          <p className={`${TYPOGRAPHY.body.large} text-gray-600 leading-relaxed`}>
            {CONNECTORS.description}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {connectors.map((connector, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border transition-all bg-white flex flex-col items-center justify-center gap-4 group relative ${
                connector.supported 
                  ? 'border-gray-100 hover:border-[#D75A4A]/30 hover:shadow-md' 
                  : 'border-gray-100 opacity-60'
              }`}
            >
              <div
                className="w-16 h-16 group-hover:scale-110 transition-transform"
                style={connector.color ? { color: connector.color } : undefined}
              >
                {connector.logo}
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className={`text-center text-sm ${connector.supported ? 'text-gray-900' : 'text-gray-500'}`}>
                  {connector.name}
                </span>
                {!connector.supported && (
                  <span className="text-xs text-gray-400 italic">(coming soon)</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            And many more... {CONNECTORS.requestConnector}{' '}
            <a href="#" className="text-[#D75A4A] hover:underline">Request a connector</a>
          </p>
        </div>
      </div>
    </section>
  );
}