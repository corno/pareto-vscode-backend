import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../../../interface/generated/pareto/schemas/server/data_types/source"

import * as t_ast_2_json from "astn/dist/implementation/algorithms/transformers/authoring_parse_tree/json_target" //FIXME this should be sealed target
import * as s_json from "pareto-json/dist/exceptional/serializers/json"

import * as x_parse from "astn/dist/implementation/algorithms/refiners/authoring_parse_tree/text/refiners"
import { Signature } from "../../../interface/algorithms/queries/seal"


export const $$: _et.Refiner<string, null, d.Seal_Parameters> = ($p) => x_parse.parse(
	$p.content,
	{
		'tab size': 1
	}
).transform_error_temp(
	($) => null
).transform_result(
	($): string => s_json.Document(
		t_ast_2_json.Document($),
		{
			'indentation': "    ",
			'newline': '\n'
		}
	),
)