#!/bin/bash
_auto_complete() {
  local cur prev opts
  COMPREPLY=()
  cur="${COMP_WORDS[COMP_CWORD]}"
  prev="${COMP_WORDS[COMP_CWORD-1]}"
  opts="add remove list"

  if [[ ${cur} == * ]]; then
    COMPREPLY=( $(compgen -W "${opts}" -- ${cur}) )
  fi
  return 0
}
complete -F _auto_complete ./ssh-manager