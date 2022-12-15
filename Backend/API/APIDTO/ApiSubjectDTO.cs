﻿namespace APIDTO;

public class ApiSubjectDTO
{
    private readonly int _subjectId;
    private readonly string _subjectName;

    public int SubjectId
    {
        get => _subjectId; 
        private init => _subjectId = value;
    }
    public string SubjectName
    {
        get => _subjectName;
        private init => _subjectName = value;
    }

    public ApiSubjectDTO(int subjectId, string subjectName)
    {
        SubjectId = subjectId;
        SubjectName = subjectName;
    }
}