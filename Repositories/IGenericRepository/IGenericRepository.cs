using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.IGenericRepository
{
    public interface IGenericRepository<T> where T : class
    {
        IEnumerable<T> GetALL();

        T GetById(object id);

        T Insert(T entity);
        T Update(T entity);
        T Delete(object id);
    }
}
