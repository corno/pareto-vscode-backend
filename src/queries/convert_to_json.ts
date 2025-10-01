import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../vscode_server_data_types"

import * as t_backend_location from "../transformations/backend_location"
import * as t_ast_2_json from "astn/dist/transformations/ast/json_target"
import * as s_json from "pareto-json/dist/serializers/json"

import * as x_parse from "astn/dist/parse/parse"

export const $$ = (
	$p: {
		'content': string
	},
): _easync.Unguaranteed_Query_Result<string, null> => x_parse.parse(
	$p.content,
	{
		'tab size': 1
	}
).transform(
	($) => _easync.query.unguaranteed['create result'](s_json.Document(
		t_ast_2_json.Document($),
		{
			'indentation': "    ",
			'newline': '\n'
		}
	)),
	($) => _easync.query.unguaranteed['raise exception'](null)
)