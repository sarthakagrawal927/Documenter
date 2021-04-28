import { ActionType } from "../action-types";

export interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface SearchRepositoriesFailAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}
