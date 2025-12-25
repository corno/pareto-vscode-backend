import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_client from "../../../interface/generated/pareto/schemas/client/data_types/target"
import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"
import * as d_ide from "astn/dist/interface/generated/pareto/schemas/ide/data_types/source"

type Signature = _et.Deprecated_Refiner_Catcher<d_client.Format_Result, d_client.Format_Error, d_client.Format_Parameters>

//dependencies
import * as r_parse from "astn/dist/implementation/refiners/authoring_parse_tree/text/refiners"
import * as t_ast_2_ide from "astn/dist/implementation/transformers/authoring_parse_tree/ide"
import * as s_parse_result from "astn/dist/implementation/transformers/parse_result/string"


namespace t_token_to_client {

	export const create_frontend_position_from_relative_location = ($: d_token.Relative_Location): d_client.Position => {
		return {
			line: $.line,
			character: $.column
		}
	}
}

namespace t_ide_to_client {

	export const create_frontend_range_from_relative_range = ($: d_ide.Relative_Range): d_client.Range => {
		return {
			start: t_token_to_client.create_frontend_position_from_relative_location($.start),
			end: t_token_to_client.create_frontend_position_from_relative_location($.end),
		}
	}

}


export const $$: Signature = ( //FIXME should be a refiner with parameters
	$p
) => _ea.create_refinement_context<d_parse_tree._T_Document, d_parse_result.Parse_Error>((abort) => r_parse.Document(
	$p.content,
	{
		'tab size': 1,
	},
	abort,
)).deprecated_transform_error(
	($) => ({
		'message': s_parse_result.Parse_Error($, { 'position info': ['zero based', null] })
	})
).transform_result(
	($) => t_ast_2_ide.Document(
		$,
		{
			'current indentation': "",
			'indentation string': $p.options['indent string'],
			'remove commas': $p.options['preserve commas'],
		}
	).map(($): d_client.Text_Edit => _ea.cc($, ($): d_client.Text_Edit => {
		switch ($[0]) {
			case 'replace': return _ea.ss($, ($) => ['replace', { 'range': t_ide_to_client.create_frontend_range_from_relative_range($.range), 'text': $.text }])
			case 'delete': return _ea.ss($, ($) => ['delete', { 'range': t_ide_to_client.create_frontend_range_from_relative_range($.range) }])
			case 'insert': return _ea.ss($, ($) => ['insert', { 'location': t_token_to_client.create_frontend_position_from_relative_location($.location), 'text': $.text }])
			default: return _ea.au($[0])
		}
	})),
)