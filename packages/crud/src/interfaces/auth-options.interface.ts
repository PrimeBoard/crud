import { SCondition } from 'nestjsx-crud/packages/crud-request/lib/types/request-query.types';
import { ObjectLiteral } from 'nestjsx-crud/packages/util';

export interface AuthGlobalOptions {
  property?: string;
}

export interface AuthOptions {
  property?: string;
  filter?: (req: any) => SCondition | void;
  or?: (req: any) => SCondition | void;
  persist?: (req: any) => ObjectLiteral;
}
