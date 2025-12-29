import * as _pi from 'pareto-core-interface'
import * as _pds from 'pareto-core-deserializer'
import * as _pt from 'pareto-core-transformer'

import * as d_client from "../../../interface/generated/pareto/schemas/client/data_types/target"
import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"
import * as d_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"
import * as d_ide from "astn/dist/interface/generated/pareto/schemas/ide/data_types/source"

type Signature = _pi.Deserializer_With_Parameters<d_client.Format_Result, d_client.Format_Error, d_client.Format_Parameters>

//dependencies
import * as ds_authoring_parse_tree from "astn/dist/implementation/deserializers/schemas/authoring_parse_tree"
import * as t_ast_2_ide from "astn/dist/implementation/transformers/schemas/authoring_parse_tree/ide"
import * as s_parse_result from "astn/dist/implementation/serializers/schemas/parse_result"


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
	$, $p, abort
) => {
	const x = ds_authoring_parse_tree.Document(
		$,
		{
			'tab size': 1,
		},
		($) => abort({
			'message': s_parse_result.Parse_Error($, { 'position info': ['zero based', null] })
		}),
	)

	const x2 = t_ast_2_ide.Document(
		x,
		{
			'current indentation': "",
			'indentation string': $p.options['indent string'],
			'remove commas': $p.options['preserve commas'],
		}
	)

	const x3 = x2.map(($): d_client.Text_Edit => _pt.cc($, ($): d_client.Text_Edit => {
		switch ($[0]) {
			case 'replace': return _pt.ss($, ($) => ['replace', { 'range': t_ide_to_client.create_frontend_range_from_relative_range($.range), 'text': $.text }])
			case 'delete': return _pt.ss($, ($) => ['delete', { 'range': t_ide_to_client.create_frontend_range_from_relative_range($.range) }])
			case 'insert': return _pt.ss($, ($) => ['insert', { 'location': t_token_to_client.create_frontend_position_from_relative_location($.location), 'text': $.text }])
			default: return _pt.au($[0])
		}
	}))

	return x3
}