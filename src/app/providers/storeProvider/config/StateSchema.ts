import { CounterSchema } from 'entities/Counter/model/types/CounterSchema';
import { UserSchema } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
}
