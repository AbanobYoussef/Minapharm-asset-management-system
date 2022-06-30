using Entities.Context;
using Microsoft.EntityFrameworkCore;
using Repositories.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Respository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly AssetsContext _context;
        private DbSet<T> table = null;

        public GenericRepository(AssetsContext context)
        {
            this._context = context;
            table = _context.Set<T>();
        }


        public T Delete(object id)
        {
            T existing = GetById(id);
            table.Remove(existing);
            return existing;
        }

        public IEnumerable<T> GetALL()
        {
            return table.ToList();
        }

        public T GetById(object id)
        {
            return table.Find(id);
        }

        public T Insert(T entity)
        {
            table.Add(entity);
            return entity;
        }

        public T Update(T entity)
        {
            table.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            return entity;
        }
    }
}
