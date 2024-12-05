const prismaErrorCode = {
  AUTHENTICATION_FAILED: 'P1000',
  DATABASE_UNREACHABLE: 'P1001',
  CONNECTION_TIMEOUT: 'P1002',
  DATABASE_NOT_FOUND: 'P1003',
  DATABASE_ALREADY_EXISTS: 'P1004',
  SYSTEM_DATABASE_DROP: 'P1005',
  NON_EMPTY_DATABASE_DROP: 'P1006',
  DATABASE_CREATION_FAILED: 'P1008',
  DATABASE_DROP_FAILED: 'P1009',
  VALUE_TOO_LONG: 'P2000',
  RECORD_NOT_FOUND: 'P2001',
  DUPLICATE: 'P2002',
  FOREIGN_KEY_CONSTRAINT_FAILED: 'P2003',
  CONSTRAINT_FAILED: 'P2004',
  INVALID_VALUE: 'P2005',
  INVALID_VALUE_FOR_FIELD: 'P2006',
  DATA_VALIDATION_ERROR: 'P2007',
  QUERY_PARSE_ERROR: 'P2008',
  QUERY_VALIDATION_ERROR: 'P2009',
  RAW_QUERY_FAILED: 'P2010',
  NULL_CONSTRAINT_VIOLATION: 'P2011',
  MISSING_REQUIRED_VALUE: 'P2012',
  MISSING_REQUIRED_ARGUMENT: 'P2013',
  RELATION_VIOLATION: 'P2014',
  RELATED_RECORD_NOT_FOUND: 'P2015',
  QUERY_INTERPRETATION_ERROR: 'P2016',
  RELATION_NOT_CONNECTED: 'P2017',
  REQUIRED_CONNECTED_RECORDS_NOT_FOUND: 'P2018',
  INPUT_ERROR: 'P2019',
  VALUE_OUT_OF_RANGE: 'P2020',
  TABLE_DOES_NOT_EXIST: 'P2021',
  COLUMN_DOES_NOT_EXIST: 'P2022',
  INCONSISTENT_COLUMN_DATA: 'P2023',
  CONNECTION_POOL_TIMEOUT: 'P2024',
};

export { prismaErrorCode };