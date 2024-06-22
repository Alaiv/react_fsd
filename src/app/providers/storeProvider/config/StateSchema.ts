import { CounterSchema } from 'entities/Counter/model/types/CounterSchema';
import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/AuthByUsername/model/type/authSchema';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    auth: AuthSchema,
}
