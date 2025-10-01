import * as _et from 'exupery-core-types'

/**
 * This file is a manual schema, it should be generated at some point
 */

export type DiagnosticSeverity =
	| ['error', null]
	| ['warning', null]
	| ['information', null]
	| ['hint', null]

export type Position = {
	'line': number
	'character': number
}

export type Range = {
	'start': Position
	'end': Position
}

export type Diagnostic = {
	'severity': DiagnosticSeverity
	'range': Range
	'message': string
	'related information': _et.Optional_Value<_et.Array<{
		'location': {
			'file path': string
			'range': Range
		}
		'message': string
	}>>
}

export type Diagnostics = _et.Array<Diagnostic>

export type DocumentData = {
	'file path': string
	'content': string
}

export type Hover_Texts = _et.Array<string>

export type Optional_Hover_Texts = _et.Optional_Value<Hover_Texts>

export type On_Hover_Result = {
	'contents': {
		'hover texts': Optional_Hover_Texts
	}
}

export type Completion_Items = _et.Array<{
	'label': string
}>

export type Optional_Completion_Items = _et.Optional_Value<Completion_Items>

export type On_Completion_Result = {
	'completion items': Completion_Items
}

export type On_Validate_Document_Result = {
	'diagnostics': Diagnostics
}