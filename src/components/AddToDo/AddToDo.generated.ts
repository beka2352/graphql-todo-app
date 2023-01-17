import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type AddToDoMutationVariables = Types.Exact<{
  input: Types.CreateTodoInput;
}>;


export type AddToDoMutation = { __typename?: 'Mutation', createTodo?: { __typename?: 'Todo', id?: string | null, title?: string | null, completed?: boolean | null } | null };


export const AddToDoDocument = gql`
    mutation AddToDo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    title
    completed
  }
}
    `;
export type AddToDoMutationFn = Apollo.MutationFunction<AddToDoMutation, AddToDoMutationVariables>;

/**
 * __useAddToDoMutation__
 *
 * To run a mutation, you first call `useAddToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToDoMutation, { data, loading, error }] = useAddToDoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddToDoMutation(baseOptions?: Apollo.MutationHookOptions<AddToDoMutation, AddToDoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToDoMutation, AddToDoMutationVariables>(AddToDoDocument, options);
      }
export type AddToDoMutationHookResult = ReturnType<typeof useAddToDoMutation>;
export type AddToDoMutationResult = Apollo.MutationResult<AddToDoMutation>;
export type AddToDoMutationOptions = Apollo.BaseMutationOptions<AddToDoMutation, AddToDoMutationVariables>;