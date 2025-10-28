import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../../../interface/generated/pareto/schemas/client/data_types/target"

import * as d_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"
import * as d_ide from "astn/dist/interface/generated/pareto/schemas/ide/data_types/source"

import * as x_parse from "astn/dist/exceptional/authoring_parse/parse"

import * as t_ast_2_ide from "astn/dist/implementation/transformations/authoring_parse_tree/ide"

import * as s_parse_result from "astn/dist/exceptional/serializers/parse_result"



const create_frontend_position_from_relative_location = ($: d_token.Relative_Location): d.Position => {
	return {
		line: $.line,
		character: $.column
	}
}
const create_frontend_range_from_relative_range = ($: d_ide.Relative_Range): d.Range => {
	return {
		start: create_frontend_position_from_relative_location($.start),
		end: create_frontend_position_from_relative_location($.end),
	}
}


export const $$: _easync.Unguaranteed_Query_Initializer<d.Format_Parameters, d.Format_Result, d.Format_Error> = (
	$p
) => x_parse.parse(
	$p.content,
	{
		'tab size': 1
	}
).transform(
	($) => _easync.query.unguaranteed['create result'](t_ast_2_ide.Document(
		$,
		{
			'current indentation': "",
			'indentation string': $p.options['indent string'],
			'remove commas': $p.options['preserve commas'],
		}
	).map(($): d.Text_Edit => _ea.cc($, ($): d.Text_Edit => {
		switch ($[0]) {
			case 'replace': return _ea.ss($, ($) => ['replace', { 'range': create_frontend_range_from_relative_range($.range), 'text': $.text }])
			case 'delete': return _ea.ss($, ($) => ['delete', { 'range': create_frontend_range_from_relative_range($.range) }])
			case 'insert': return _ea.ss($, ($) => ['insert', { 'location': create_frontend_position_from_relative_location($.location), 'text': $.text }])
			default: return _ea.au($[0])
		}
	}))),
	($) => _easync.query.unguaranteed['raise exception']({
		'message': s_parse_result.Parse_Error($, { 'position info': ['zero based', null] })
	})
)