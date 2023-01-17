import * as Types from '../../types.generated';

import { gql } from '@apollo/client';
import { ToDoItemFragmentDoc } from '../ToDoItem.tsx/ToDoItem.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type TodosQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TodosQuery = { __typename?: 'Query', todos?: { __typename?: 'TodosPage', data?: Array<{ __typename?: 'Todo', id?: string | null, title?: string | null, completed?: boolean | null } | null> | null } | null };


export const TodosDocument = gql`
    query Todos {
  todos {
    data {
      ...ToDoItem
    }
  }
}
    ${ToDoItemFragmentDoc}`;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
      }
export function useTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;