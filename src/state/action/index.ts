interface searchRepoAction{
    type:"search_repositories"
}

interface repositorySuccessAction{
    type:"repositories_success",
    payload:string[]
}

interface searchRepositioriesError {
    type:"search_repositories_error",
    payload:string
}

export type Action=
    searchRepoAction|repositorySuccessAction|searchRepositioriesError