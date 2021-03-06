using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Core.Entity_Models
{
    [Table("Course")]
    public partial class Course
    {
        public Course()
        {
            Enrolments = new HashSet<Enrolment>();
        }

        public int CourseId { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        public virtual ICollection<Enrolment> Enrolments { get; set; }
    }
}
