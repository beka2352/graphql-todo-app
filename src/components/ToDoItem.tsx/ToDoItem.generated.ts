import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ToDoItemFragment = { __typename?: 'Todo', id?: string | null, title?: string | null, completed?: boolean | null };

export type ChangeStatusMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  input: Types.UpdateTodoInput;
}>;


export type ChangeStatusMutation = { __typename?: 'Mutation', updateTodo?: { __typename?: 'Todo', id?: string | null, title?: string | null, completed?: boolean | null } | null };

export type DeleteToDoMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteToDoMutation = { __typename?: 'Mutation', deleteTodo?: boolean | null };

export const ToDoItemFragmentDoc = gql`
    fragment ToDoItem on Todo {
  id
  title
  completed
}
    `;
export const ChangeStatusDocument = gql`
    mutation ChangeStatus($id: ID!, $input: UpdateTodoInput!) {
  updateTodo(id: $id, input: $input) {
    id
    title
    completed
  }
}
    `;
export type ChangeStatusMutationFn = Apollo.MutationFunction<ChangeStatusMutation, ChangeStatusMutationVariables>;

/**
 * __useChangeStatusMutation__
 *
 * To run a mutation, you first call `useChangeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeStatusMutation, { data, loading, error }] = useChangeStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useChangeStatusMutation(baseOptions?: Apollo.MutationHookOptions<ChangeStatusMutation, ChangeStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeStatusMutation, ChangeStatusMutationVariables>(ChangeStatusDocument, options);
      }
export type ChangeStatusMutationHookResult = ReturnType<typeof useChangeStatusMutation>;
export type ChangeStatusMutationResult = Apollo.MutationResult<ChangeStatusMutation>;
export type ChangeStatusMutationOptions = Apollo.BaseMutationOptions<ChangeStatusMutation, ChangeStatusMutationVariables>;
export const DeleteToDoDocument = gql`
    mutation DeleteToDo($id: ID!) {
  deleteTodo(id: $id)
}
    `;
export type DeleteToDoMutationFn = Apollo.MutationFunction<DeleteToDoMutation, DeleteToDoMutationVariables>;

/**
 * __useDeleteToDoMutation__
 *
 * To run a mutation, you first call `useDeleteToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteToDoMutation, { data, loading, error }] = useDeleteToDoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteToDoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteToDoMutation, DeleteToDoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteToDoMutation, DeleteToDoMutationVariables>(DeleteToDoDocument, options);
      }
export type DeleteToDoMutationHookResult = ReturnType<typeof useDeleteToDoMutation>;
export type DeleteToDoMutationResult = Apollo.MutationResult<DeleteToDoMutation>;
export type DeleteToDoMutationOptions = Apollo.BaseMutationOptions<DeleteToDoMutation, DeleteToDoMutationVariables>;