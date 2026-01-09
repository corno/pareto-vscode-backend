import * as _pi from 'pareto-core-interface'

import * as _i_in from "./data_types/source"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Diagnostic_Severity = (
    $$_: _i_in._T_Diagnostic_Severity,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Position = (
    $$_: _i_in._T_Position,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Range = (
    $$_: _i_in._T_Range,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Diagnostic = (
    $$_: _i_in._T_Diagnostic,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Diagnostics = (
    $$_: _i_in._T_Diagnostics,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Document_Data = (
    $$_: _i_in._T_Document_Data,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Hover_Texts = (
    $$_: _i_in._T_Hover_Texts,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Optional_Hover_Texts = (
    $$_: _i_in._T_Optional_Hover_Texts,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_On_Hover_Result = (
    $$_: _i_in._T_On_Hover_Result,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Completion_Items = (
    $$_: _i_in._T_Completion_Items,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Optional_Completion_Items = (
    $$_: _i_in._T_Optional_Completion_Items,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_On_Completion_Result = (
    $$_: _i_in._T_On_Completion_Result,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_On_Validate_Document_Result = (
    $$_: _i_in._T_On_Validate_Document_Result,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Convert_To_JSON_Parameters = (
    $$_: _i_in._T_Convert_To_JSON_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Seal_Parameters = (
    $$_: _i_in._T_Seal_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_On_Completion_Parameters = (
    $$_: _i_in._T_On_Completion_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_On_Hover_Parameters = (
    $$_: _i_in._T_On_Hover_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

export type _T_Validate_Document_Parameters = (
    $$_: _i_in._T_Validate_Document_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => string

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Diagnostic_Severity = _T_Diagnostic_Severity

export type Position = _T_Position

export type Range = _T_Range

export type Diagnostic = _T_Diagnostic

export type Diagnostics = _T_Diagnostics

export type Document_Data = _T_Document_Data

export type Hover_Texts = _T_Hover_Texts

export type Optional_Hover_Texts = _T_Optional_Hover_Texts

export type On_Hover_Result = _T_On_Hover_Result

export type Completion_Items = _T_Completion_Items

export type Optional_Completion_Items = _T_Optional_Completion_Items

export type On_Completion_Result = _T_On_Completion_Result

export type On_Validate_Document_Result = _T_On_Validate_Document_Result

export type Convert_To_JSON_Parameters = _T_Convert_To_JSON_Parameters

export type Seal_Parameters = _T_Seal_Parameters

export type On_Completion_Parameters = _T_On_Completion_Parameters

export type On_Hover_Parameters = _T_On_Hover_Parameters

export type Validate_Document_Parameters = _T_Validate_Document_Parameters

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Diagnostic_Severity {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Diagnostic_Severity
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Position {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Position
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Diagnostic {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Diagnostic
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Diagnostics {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Diagnostics
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Document_Data {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Document_Data
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Hover_Texts {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Hover_Texts
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Optional_Hover_Texts {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Optional_Hover_Texts
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_On_Hover_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Hover_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Completion_Items {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Completion_Items
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Optional_Completion_Items {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Optional_Completion_Items
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_On_Completion_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Completion_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_On_Validate_Document_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Validate_Document_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Convert_To_JSON_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Convert_To_JSON_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Seal_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Seal_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_On_Completion_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Completion_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_On_Hover_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Hover_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace _T_Validate_Document_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Validate_Document_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

// *** ALIASES FOR NESTED TYPES

export namespace Diagnostic_Severity {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Diagnostic_Severity
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Position {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Position
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Diagnostic {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Diagnostic
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Diagnostics {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Diagnostics
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Document_Data {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Document_Data
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Hover_Texts {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Hover_Texts
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Optional_Hover_Texts {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Optional_Hover_Texts
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace On_Hover_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Hover_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Completion_Items {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Completion_Items
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Optional_Completion_Items {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Optional_Completion_Items
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace On_Completion_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Completion_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace On_Validate_Document_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Validate_Document_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Convert_To_JSON_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Convert_To_JSON_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Seal_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Seal_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace On_Completion_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Completion_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace On_Hover_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_On_Hover_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}

export namespace Validate_Document_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Validate_Document_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    export type RESULT = string
}
