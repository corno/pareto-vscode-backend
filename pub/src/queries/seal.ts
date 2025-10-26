import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../generated/interface/schemas/server/data_types/source"

import * as t_ast_2_json from "astn/dist/transformations/authoring_ast/json_target"
import * as s_json from "pareto-json/dist/serializers/json"

import * as x_parse from "astn/dist/exceptional/authoring_parse/parse"

/**
 * FIXME: this is not a query, but a transformation
 */
export const $$: _easync.Unguaranteed_Query_Initializer<d.Seal_Parameters, string, null> = (
	$p,
) => x_parse.parse(
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