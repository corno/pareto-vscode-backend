import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../server_data_types"

import { $$ as load_astn_document } from "pareto/dist/queries/load_astn_document"

import * as t_find_hover_texts from "../transformations/find_hover_texts"
import * as t_backend_location from "../transformations/backend_location"




export const $$ = (
	$p: {
		'content': string
		'file path': string
		'position': d.Position
	},
): _easync.Safe_Query_Result<d.On_Hover_Result> => load_astn_document(
	{
		'content': $p.content,
		'file path': $p['file path'],
	}
).map(($): d.On_Hover_Result => ({
	'contents': {
		'hover texts': t_find_hover_texts.Node($, {
			'location': t_backend_location.Relative_Location($p.position),
			'full path': ``,
			'id path': ``,
		})
	}
})).catch(($) => {
	return _easync.query.safe['create result']({
		'contents': {
			'hover texts': _ea.not_set()
		}
	})
})